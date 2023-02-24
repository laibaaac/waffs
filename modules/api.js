export async function getData(id = null) {


    try {

        let url = 'https://opensheet.elk.sh/1W7nmmrM1C2uX6_nRSsXP5x3A7R1A9b5P6Q-fJhtwLQ8/blad1';

        const response = await fetch(url);

        if (response.ok) {
        //  hier krijg ik mijn data, vanuit de spreadsheet terug, ipv andere dingen 
            const result = await response.json();
            return result;
            
        } else {
            console.log('omg error!!');
            return [];
            // ik krijg heir niks (http error)
        }
    // hier fetch ik een error, alles wat er fout gaat in de try, wordt hier gepakt en daarna naar mijn main.js gestuurd 
    } catch (error) {
        console.log(error);
        return error
    }

}