import TVShow from '../../models/TVShow';
import './style.css'

const imageNotFound = 'assets//img/no-img-portrait-text.png'

const renderTVShowCard = (show: TVShow, container: HTMLElement) => {
    
    const htmlContent = `
        
        <div class="tv-card">
            <a id="modal-${show.id}" href="show.html?id=${show.id}"> 
                <div class="show-banner">
                    <img src="${show.imageUrl || imageNotFound}" alt="${show.name}">
                
                    <h3>${show.name}</h3>
                </div>
                <span id="genres-card">${show.genres.join(', ')}</span>
            </a>

            <div id="rating-fav">
                <a href="https://www.imdb.com/title/${show.imdbID}" target="_blank">
                <div class="rating"><span><strong>IMDb</strong> <small>${show.rating}</small></div>
                </a>
                <div class="favshow" data-item="${show.id}"></div>
            </div>

        </div>
    `
    container.innerHTML += htmlContent
}

export default renderTVShowCard