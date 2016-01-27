$(function () {
    $('#btnAdd').click(function () {
        var num = $('.clonedInput').length, // how many "duplicatable" input fields we currently have
            newNum = new Number(num + 1), // the numeric ID of the new input field being added
            newElem = $('#session' + num).clone().attr('id', 'session' + newNum).fadeIn('slow'); // create the new session via clone(), and manipulate it's ID using newNum value
        // manipulate the name/id values of the input inside the new element

        // Header reference
        newElem.find('.heading_ref').attr('id', 'ID' + newNum + '_sessionRef').attr('name', 'ID' + newNum + '_sessionRef').html('Session ' + newNum);
        // Day select
        newElem.find('.day').attr('id', 'day'+ newNum).attr('name', 'day'+ newNum).val('');
        // Date
        newElem.find('.date').attr('name', 'date'+ newNum).val('');
        // Event start time
        newElem.find('.start_time').attr('id', 'start_time'+ newNum).attr('name', 'start_time'+ newNum).val('');
        // Event end time
        newElem.find('.end_time').attr('id', 'end_time'+ newNum).attr('name', 'end_time'+ newNum).val('');
        // Venue select
        newElem.find('.venue').attr('id', 'venue'+ newNum).attr('name', 'venue'+ newNum).val('');
        //  PC checkbox
        newElem.find('.pc').attr('id', 'pc' + newNum).attr('name', 'pc' + newNum).val([]);
        // Mac Laptop checkbox
        newElem.find('.mac').attr('id', 'mac' + newNum).attr('name', 'mac' + newNum).val([]);
        // Tablet/Smartphone checkbox
        newElem.find('.tablet_smartphone').attr('id', 'tablet_smartphone' + newNum).attr('name', 'tablet_smartphone' + newNum).val([]);
        // Wireless Connection checkbox
        newElem.find('.dev_wireless').attr('id', 'dev_wireless' + newNum).attr('name', 'dev_wireless' + newNum).val([]);
      	// Comments box
        newElem.find('.comment').attr('id', 'comment' + newNum).attr('name', 'comment' + newNum).val([]);



        // insert the new element after the last "duplicatable" input field
        $('#session' + num).after(newElem);

        // enable the "remove" button
        $('#btnDel').attr('disabled', false);

        // right now you can only add 5 sessions. change '5' below to the max number of times the form can be duplicated
        if (newNum == 5) $('#btnAdd').attr('disabled', true).prop('value', "You've reached the limit");
    });

    $('#btnDel').click(function () {
        // confirmation
        if (confirm("Are you sure you wish to delete the last added session? Any information it contains will be lost!")) {
            var num = $('.clonedInput').length;
            // how many "duplicatable" input fields we currently have
            $('#session' + num).slideUp('slow', function () {
                $(this).remove();
                // if only one element remains, disable the "remove" button
                if (num - 1 === 1) $('#btnDel').attr('disabled', true);
                // enable the "add" button
                $('#btnAdd').attr('disabled', false).prop('value', "[ + ] add an additional session");
            });
        }
        return false;
        // remove the last element

        // enable the "add" button
        $('#btnAdd').attr('disabled', false);
    });

    $('#btnDel').attr('disabled', true);
});
