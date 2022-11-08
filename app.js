function where() {
    var value = document.getElementById("form1").value;
    if (value == "here") {
        swal("Known for his work emphasizing concept over aesthetics, for art as performance, and for art on the land, Robert Morris took advantage of this site. He selected landscape versus a peopled area, a hilly terrain to obscure the source, and the steam conduit system to Fairhaven College. Chance and environmental factors such as sunshine, wind, and fog affect the forms of the artist's material of steam. Morris also integrated into the visual image other sensual experiences such as sound, smell, and physical contact.")
        const element = document.getElementById("form01");
        element.remove();
    } else {
        swal("Type 'here' to continue.")
    }
}

function warm() {
    var value = document.getElementById("form2").value;
    if (value == "yes") {
        swal("Morris' work, Untitled (Steam Work for Bellingham) (1971) is a special type of fountain that gurgles underground and swells to an amorphous column; then the misty cloud dissipates. Its point of origin was a U-shaped pipe above ground where steam escaped in one area from the University's heating system of underground pipes. In 1971, after participating in a symposium, Morris was commissioned to create his steam piece that was finally built in 1974.49 Morris re-planned this source of regulated but fluctuating power; he determined the amount of steam to be released, reconfigured its visual appearance, and re-sited the new work in the rolling landscape of south campus. When the fountain is turned off, only rocks fill his container, a plain square outlined by wood beams set in the ground. Natural environmental factors such as sun, wind, and condensation in the air affect the rate of evaporation and the shapes the steam will form. Economic factors such as energy conservation often erase the boundaries between those who love it and those who oppose it.")
        const element = document.getElementById("form02");
        element.remove();
    } else {
        swal("It's a bit chilly don't ya think. Type 'yes' to continue.")
    }
}
