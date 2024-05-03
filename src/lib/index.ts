export const getReadingTime = (paragraphs: HTMLParagraphElement[]): number => {
    let content: string = "";

    for (const paragraph of paragraphs) {
        const text = paragraph.innerHTML;
        console.log(text)
        content += text;
    }

    return Math.round(content.trim().split(" ").length / 225);
}