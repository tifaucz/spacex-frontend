/**
 * @author Tiago Faucz
 * @email faucz@pm.me
 * @created 2023
 * @version 0.3
 * 
 * typeEffectPlus applies a typewriter effect to the text content of an HTML element.
 * It simulates the typing of text with a cursor animation.
 *
 * @param {any} element - The DOM element to which the typewriter effect will be applied.
 * @param {string} [text=''] - The text to type out. If not provided, the element's current text will be used.
 * @param {number} [speed=20] - The typing speed in milliseconds.
 * @returns A stop function that can be called to halt the typewriter effect and restore original text.
 */


const cursors = ['▒',' ','░','▒','▓','█','░','▒','▓'];
let cursorIndex = 0;

function extractTextAndElements(htmlString: string, tags: any[] = []) 
{
	let txt = '';
	let t: any[] = [...tags]
	const tagOpenStart = htmlString.indexOf('<')
	const tagOpenEnd = htmlString.indexOf('>')

	if (tagOpenStart == -1) {
		txt = htmlString;
		return { txt, tags };
	}
	const tagText = htmlString.substring(tagOpenStart, tagOpenEnd+1)
	const tagArray = tagText.replaceAll('class=', '').replaceAll("'", '').replaceAll('"', '').replaceAll('`', '').replaceAll('<', '').replaceAll('>', '').split(' ');
	const tagName = tagArray.shift();
	const tagClasses = tagArray.join(' ');
	let findClose = htmlString.replace(tagText, '').split('</'+tagName+'>')
	let closeIndex = 0;
	txt = ''
	
	for(let i=0; i<findClose.length; i++) {
		const part = findClose[i];
		closeIndex+= part.replace(/<[^>]*>/g, '').length;
		txt += part;
		findClose[i] = ''
		if(!part.includes('<'+tagName)) break;
		else txt += '</'+tagName+'>';
	}

	txt += findClose.join('')

	t.push({
		tag: tagName,
		classes: tagClasses,
		start: tagOpenStart,
		end: closeIndex
	});

    return extractTextAndElements(txt, t);
}

function reconstructHtml(txt: string, tags: any[] = [], trailingCloses: any[] = []): string 
{
	const t = [...tags]
	const closes = [...trailingCloses]
	if(t.length < 1 || t[0].start > txt.replace(/<[^>]*>/g, '').length){
		return txt + cursors[cursorIndex%cursors.length] + trailingCloses.map(item => '</'+item.tag+'>').join('');
	}

	const e = t.shift(); 

	let text = ''+txt;
	
	const openTag = `<${e.tag}${e.classes.length>0 ? ` class="${e.classes}"` : ''}>`;
	const closeTag = `</${e.tag}>`;

	let isTag = false;
	let plainIndex = -1;
	let openAdded = false;
	let closeAdded = false;
	let newText = ''+text;
	for (let i = 0; i < text.length; i++) {
		let char = text[i];

		if(char == '<' || char == '>') isTag = true;
		if(isTag && text[i-1] == '>' && char != '<') isTag = false;
		
		if(!isTag){ 
			plainIndex ++;
		}

		if(!openAdded && plainIndex == e.start){
			newText = newText.slice(0, i) + openTag + newText.slice(i);
			openAdded = true;
		}
		if(!closeAdded && plainIndex == e.end){
			newText = newText.slice(0, i+openTag.length) + closeTag + newText.slice(i+openTag.length);
			closeAdded = true;
			
		}
		if(plainIndex > e.end) break;
	
	}

	if(!closeAdded)
	{
		closes.push({
			tag: e.tag,
			end: e.end
		})
		closes.sort((a, b) => a.end - b.end)
	}

	return reconstructHtml(newText, t, closes);
}

export function typeEffectPlus(element: any, text: string = '', speed = 25) 
{
	const original = text.length > 0 ? text : element.innerHTML;
	const { txt, tags } = extractTextAndElements(original);
	const original_length = txt.length;
	
	element.innerHTML = '▒';
	let i = 0;
 	let timer = setInterval(function() {
		if (i < original_length) 
		{
			let subtxt = element.innerHTML.replace(/<[^>]*>/g, '').slice(0, -1);
			const progress = (100/original_length)*subtxt.length
			let addChars = txt.charAt(i)
			const randomNumber = Math.floor(Math.random() * 100);
			if(randomNumber < progress && i+2 < original_length){
				i++
				addChars += txt.charAt(i)
			}

			const currentText = subtxt + addChars;

			element.innerHTML = reconstructHtml(currentText, tags);

			i++;
			cursorIndex++;

		} else {
			element.innerHTML = original;
			clearInterval(timer);
		}
	}, speed);

	return function stop() {
		element.innerHTML = original;
		clearInterval(timer);
	};
}















