import FuzzySet from 'fuzzyset.js';
export default class StringHelper {

    private wordsList: string[] = [];
    private wordToMatch: string = '';

    private wordsBagList: string[] = ['Bolso', 'Manos Libres', 'Bolso Cruzado', 'Morral', 'Maleta'];

    public setWordsList(words: any[]) {
        this.wordsList = words;
    }
    public setWordToMatch(word: string) {
        this.wordToMatch = word;
    }
    public getMatch(): Promise<string> {
        return new Promise(resolve => {
            const a = FuzzySet(this.wordsList);
            const response = a.get(this.wordToMatch);
            if (!response || !response[0] || !response[0][1]) {
                const b = FuzzySet(this.wordsBagList);
                const response = b.get(this.wordToMatch);
                if (!response || !response[0] || !response[0][1]) {
                    resolve("NA")
                } else {
                    const a = FuzzySet(this.wordsList);
                    const response = a.get("Bolsos y Maletines");
                    resolve(response[0][1])
                }
            } else {
                resolve(response[0][1])
            }

        })
    }
}
