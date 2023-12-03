
$(() => {
	const $container = $("#container")

    // creating h1 element
    const $h1 = $("<h1>")
    $h1.text('HOGWARTS')
    $container.append($h1)

    // creating h2 elelemtn with my name
    const $h2 = $('<h2>').text('Amrita')
    $container.append($h2)

    // h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
    const $h3 = $('<h3>').text('Hufflepuff')
    $container.append($h3)

    //h4 element with your pet's name
    // this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
    const $h4 = $('<h4>').text('Kimi')
    $h4.addClass('cat')
    $container.append($h4)

    //h4 element with your wand 
    const $h4wand = $('<h4>').text('Holly Wand with Unicorn Hair Core')
    $container.append($h4wand)
    





});