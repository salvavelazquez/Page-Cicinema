const renderCards = require("./renderCards");

$.get("https://webpt19b.web.app/data/movies.json", (data, status) => {
    renderCards(data);
});