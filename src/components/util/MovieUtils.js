
export const getSearched = (movielist, search, selectedGenres, selectedDirectors) => {
    search = search?.toLowerCase();
    const searchedList = search?.length > 0 ? movielist.filter((rec) => rec.title.toLowerCase().includes(search) || rec.director.toLowerCase().includes(search) || rec.genres.includes(search)) : movielist;
   return selectedGenres?.length > 0 || selectedDirectors.length > 0 ? searchedList.filter((rec) => ((selectedDirectors.length === 0 || selectedDirectors.includes(rec.director) )&& (selectedGenres.length === 0 || selectedGenres.some((x) => rec.genres.includes(x))))) : searchedList;
};
export const getGeners = (movielist) => {
    const genres = [ ...new Set(movielist.flatMap((rec) => rec.genres))];
    console.log('geners', genres);
    return genres;
};

export const getDirectors = (movielist) => {
    const director = [...new Set(movielist.flatMap((rec) => rec.director))];
    console.log('director',director);
    return director;
};