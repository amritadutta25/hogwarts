
$(() => {

    //----------------
    //Year 1
    //----------------
	const $container = $("#container")

    // creating h1 element
    const $h1 = $("<h1>")
    $h1.text('HOGWARTS')
    $container.append($h1)

    //----------------
    //Year 2
    //----------------

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

    //----------------
    //Year 3
    //----------------
    
    //creating ul element (with the attribute of storage and a value of trunk)
    const $ul = $('<ul>')
    $ul.attr('storage', 'trunk')
    $container.append($ul)

    // adding list items
    const $li1 = $('<li>').text('Butter beer')
    $ul.append($li1)

    const $li2 = $('<li>').text('invisibility cloak')
    $li2.addClass("secret")
    $ul.append($li2)

    const $li3 = $('<li>').text('magic map')
    $li3.addClass("secret")
    $ul.append($li3)

    const $li4 = $('<li>').text('time turner')
    $li4.addClass("secret")
    $ul.append($li4)

    const $li5 = $('<li>').text('leash')
    $li5.addClass("cat")
    $ul.append($li5)

    const $li6 = $('<li>').text("Bertie Bott's Every Flavor [Jelly] Beans")
    $ul.append($li6)





});