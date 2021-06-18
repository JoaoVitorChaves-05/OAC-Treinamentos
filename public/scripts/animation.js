function showDetails(element) {
    var cards = element.parentNode.parentNode.parentNode.parentNode;
    var card_course = cards.children[0]
    var card_details = cards.children[1]

    card_details.classList.remove('animate-hide-details')
    card_course.classList.remove('animate-appear-course')

    card_course.classList.add('animate-hide-course')
    card_details.classList.add('animate-appear-details')
}

function hideDetails(element) {
    var cards = element.parentNode.parentNode.parentNode.parentNode;
    var card_course = cards.children[0]
    var card_details = cards.children[1]

    card_course.classList.remove('animate-hide-course')
    card_details.classList.remove('animate-appear-details')

    card_course.classList.add('animate-appear-course')
    card_details.classList.add('animate-hide-details')
}

function showContact(element) {
    var cards = element.parentNode.parentNode.parentNode.parentNode;
    var card_contact = cards.children[2]
    var card_course = cards.children[0]

    card_contact.classList.remove('animate-hide-details')
    card_course.classList.remove('animate-appear-course')

    card_course.classList.add('animate-hide-course')
    card_contact.classList.add('animate-appear-details')
}

function hideContact(element) {
    var cards = element.parentNode.parentNode.parentNode.parentNode;
    var card_contact = cards.children[2]
    var card_course = cards.children[0]

    card_course.classList.remove('animate-hide-course')
    card_contact.classList.remove('animate-appear-details')

    card_course.classList.add('animate-appear-course')
    card_contact.classList.add('animate-hide-details')
}