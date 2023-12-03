
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

    //----------------
    //Year 4
    //----------------

    //creating h5 element
    const $h5 = $("<h5>").text("Spring 2017")
    $container.append($h5)

    // creating table
    const $table = $("<table>")
    $container.append($table)

    // add thead element
    const $thead = $("<thead>")
    $table.append($thead)

    //Inside the thead element add two th elements
    const $th1 = $("<th>")
    $th1.text("Day")

    const $th2 = $("<th>")
    $th2.text("Classes")

    $thead.append($th1)
    $thead.append($th2)

    //Create a tr element and add two td elements inside
    const $trMon = $("<tr>")
    $table.append($trMon)

    const $td1 = $("<td>").text("Monday")

    const $td2 = $("<td>").text("Herbology, Divination, History of Magic")

    $trMon.append($td1)
    $trMon.append($td2)

    //tr for Tuesday
    const $trTue = $("<tr>")
    $table.append($trTue)

    const $tdTue1 = $("<td>").text("Tuesday")

    const $tdTue2 = $("<td>").text("Charms, Potions, Transfiguration")

    $trTue.append($tdTue1)
    $trTue.append($tdTue2)

    //tr for Wednesday
    const $trWed = $("<tr>")
    $table.append($trWed)

    const $tdWed1 = $("<td>").text("Wednesday")

    const $tdWed2 = $("<td>").text("Divination, History of Magic, Transfiguration")

    $trWed.append($tdWed1)
    $trWed.append($tdWed2)

    //tr for Thursday
    const $trThu = $("<tr>")
    $table.append($trThu)

    const $tdThu1 = $("<td>").text("Thursday")

    const $tdThu2 = $("<td>").text("Divination, Charms, Potions")

    $trThu.append($tdThu1)
    $trThu.append($tdThu2)

    //tr for Friday
    const $trFri = $("<tr>")
    $table.append($trFri)

    const $tdFri1 = $("<td>").text("Friday")

    const $tdFri2 = $("<td>").text("Defense Against the Dark Arts, Quidditch practice, Potions")

    $trFri.append($tdFri1)
    $trFri.append($tdFri2)







});