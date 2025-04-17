import axios from "axios";

// Mock fallback songs for demo or offline mode
const mockSongs = {
  Clear: ["Here Comes the Sun - The Beatles", "Walking on Sunshine - Katrina & The Waves", "Mr. Blue Sky - Electric Light Orchestra", "Pocketful of Sunshine - Natasha Bedingfield", "Good Day Sunshine - The Beatles", "Sunflower - Post Malone, Swae Lee", "Beautiful Day - U2", "Send Me On My Way - Rusted Root", "I'm Yours - Jason Mraz", "Happy - Pharrell Williams", "Best Day of My Life - American Authors", "Riptide - Vance Joy", "Can't Stop the Feeling! - Justin Timberlake", "The Middle - Zedd, Maren Morris, Grey", "Dance Monkey - Tones and I", "Summer - Calvin Harris", "Blame It on the Sun - Stevie Wonder", "California Gurls - Katy Perry", "Shut Up and Dance - WALK THE MOON", "A Sky Full of Stars - Coldplay", "Firework - Katy Perry", "Shake It Off - Taylor Swift", "Happy Together - The Turtles", "Feel So Close - Calvin Harris", "Dreams - The Cranberries", "Love Me Again - John Newman", "Castle on the Hill - Ed Sheeran", "Dancing Queen - ABBA", "Adventure of a Lifetime - Coldplay", "I Got You (I Feel Good) - James Brown", "Viva La Vida - Coldplay", "Rolling in the Deep - Adele", "Send My Love - Adele", "Shape of You - Ed Sheeran", "Don't Stop Believin' - Journey", "Sugar - Maroon 5", "Wake Me Up - Avicii", "Roar - Katy Perry", "Uptown Funk - Mark Ronson ft. Bruno Mars", "Counting Stars - OneRepublic", "Stronger - Kanye West", "On Top of the World - Imagine Dragons", "Take on Me - a-ha", "You Make My Dreams - Hall & Oates", "Good as Hell - Lizzo", "We Are Young - fun.", "Sweet Caroline - Neil Diamond", "Don't Stop Me Now - Queen", "Stuck Like Glue - Sugarland", "Walking on the Moon - The Police"],
  Rain: ["Set Fire to the Rain - Adele", "Umbrella - Rihanna", "Raindrops Keep Fallin' on My Head - B.J. Thomas", "November Rain - Guns N' Roses", "Purple Rain - Prince", "Rain - The Script", "Have You Ever Seen the Rain - Creedence Clearwater Revival", "Rainy Day Women #12 & 35 - Bob Dylan", "A Hard Rain's A-Gonna Fall - Bob Dylan", "It Will Rain - Bruno Mars", "Riders on the Storm - The Doors", "Rain on Me - Lady Gaga, Ariana Grande", "Come Rain or Come Shine - Ray Charles", "After the Rain - Nickelback", "Rain Over Me - Pitbull ft. Marc Anthony", "Blame It on the Rain - Milli Vanilli", "Stormy Weather - Etta James", "No Rain - Blind Melon", "Only Happy When It Rains - Garbage", "Singing in the Rain - Gene Kelly", "Rain - Madonna", "Heavy Rain - Rhye", "Kiss the Rain - Billie Myers", "Let It Rain - Amanda Marshall", "Rain When I Die - Alice in Chains", "Raining Blood - Slayer", "Rain King - Counting Crows", "Black Rain - Soundgarden", "Red Rain - Peter Gabriel", "Blue Eyes Crying in the Rain - Willie Nelson", "Rain Is a Good Thing - Luke Bryan", "Monsoon - Tokio Hotel", "Make It Rain - Ed Sheeran", "Rainy Day - Coldplay", "Rain Down - Delirious?", "Into Each Life Some Rain Must Fall - Ella Fitzgerald", "Chocolate Rain - Tay Zonday", "Pray for Rain - Massive Attack", "Rain Falls Down - Rolling Stones", "Rhythm of the Rain - The Cascades", "I Can't Stand the Rain - Ann Peebles", "Cryin' in the Rain - The Everly Brothers", "A Little Rain - Tom Waits", "Rain - Breaking Benjamin", "She's My Kind of Rain - Tim McGraw", "Rain on the Roof - The Lovin' Spoonful", "Rainy Night in Georgia - Brook Benton", "Come in with the Rain - Taylor Swift", "Rain - Mika", "I Wish It Would Rain - The Temptations"],
  Clouds: ["Clouds - One Direction", "Sky Full of Stars - Coldplay", "Both Sides Now - Joni Mitchell", "Cloudbusting - Kate Bush", "Head in the Clouds - Hayley Kiyoko", "Big Yellow Taxi - Counting Crows", "Cloud Nine - The Temptations", "Clouds - Zach Sobiech", "Cloud of Unknowing - Gorillaz", "Get Off of My Cloud - The Rolling Stones", "Little Fluffy Clouds - The Orb", "Grey Cloudy Lies - George Harrison", "Clouds - Imagine Dragons", "Above the Clouds - Paul Weller", "Cloudy Day - Tones and I", "Clouds Over California - DevilDriver", "Blue Skies - Ella Fitzgerald", "Clouded - Brent Faiyaz", "Clouds - Prince", "Lonely Cloud - The Veronicas"],
  Default: ["Imagine - John Lennon", "Bohemian Rhapsody - Queen"]
};

export async function getSongsForWeather(weather) {
  try {
    const response = await axios.post("http://localhost:5000/api/songs", { weather });
    const data = response.data;

    if (!data || !data.songs || typeof data.songs !== "string") {
      console.warn("Invalid response structure. Using mock songs.");
      return mockSongs[weather] || mockSongs.Default;
    }

    const songLines = data.songs.split("\n").filter((line) => line.trim() !== "");
    return songLines.length > 0 ? songLines : mockSongs[weather] || mockSongs.Default;
  } catch (error) {
    console.error("Error fetching songs:", error.message);
    return mockSongs[weather] || mockSongs.Default;
  }
}
