function toggleCard(cardId) {
  // Hide all content
  var contents = document.querySelectorAll(".specification");
  contents.forEach(function (content) {
    content.classList.remove("active-specification");
  });

  var cards = document.querySelectorAll(".accordion-header");
  cards.forEach(function (card) {
    card.classList.remove("active-accordion-header");
  });

  // Show the selected content
  var selectedCard = document.getElementById(cardId);

  var card = selectedCard.getElementsByClassName("accordion-header")[0];
  card.classList.add("active-accordion-header");

  var selectedContent = selectedCard.getElementsByClassName("specification")[0];
  selectedContent.classList.add("active-specification");
}
