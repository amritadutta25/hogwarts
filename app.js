
$(() => {
	const $container = $("#container")
    console.log($container)

    const $h1 = $("<h1>")
    $h1.text('HOGWARTS')
    $container.append($h1)
    console.log($h1)

});