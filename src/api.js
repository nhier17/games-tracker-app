const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
    const month = new Date().getMonth() +1;
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate() ;
    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

const currentYear = new Date().getFullYear();
const CurrentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${CurrentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${CurrentMonth}-${currentDay}`
const  nextYear = `${currentYear + 1}-${CurrentMonth}-${currentDay}`


const popular_games =  `games?key=b2aed99760124f589c0e8e5994b1d987&dates=${lastYear},${currentDate}&ordering=-rating&page_size=15`
const upcoming_games = `games?key=b2aed99760124f589c0e8e5994b1d987&dates=${currentDate},${nextYear}&ordering=-added&page_size=15`
const new_games = `games?key=b2aed99760124f589c0e8e5994b1d987&dates=${lastYear},${currentDate}&ordering=-released&page_size=15`

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//game details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=b2aed99760124f589c0e8e5994b1d987` 

export const gameScreenshotsURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=b2aed99760124f589c0e8e5994b1d987` 
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9&key=b2aed99760124f589c0e8e5994b1d987`;