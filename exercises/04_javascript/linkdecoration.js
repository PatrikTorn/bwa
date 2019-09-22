// Exercise 4.4 Javascript file  //
// Read the instructions.html //

//some helpful debug code

$("#javascript_start").html("[OK] Started executing the javascript file");
$("#javascript_end").html("[WAITING]...this far we haven't reached the end... Maybe you should check dev tools?");

// ADD YOUR CODE BETWEEN THESE LINES //


$("ul li a").each((i, link) => {
    const extension = link.pathname.split('.').pop();
    if (extension.includes('/')) return
    
    if (extension === 'pdf') {
        $(link).addClass('pdf');
    } else if (extension !== 'html') {
        $(link).addClass('download');
    }

})




// ADD YOUR CODE BETWEEN THESE LINES //

//some helpful debug code

$("#javascript_end").html("[OK] The end of your javascript file was reached. (meaning there were no huge errors) Hopefully your code works too! ");
