function Vote(element){
    var itemId = element.attributes["itemId"].value;
    var vote = element.attributes["vote"].value;
    var form = $('form[itemId =comment-form-' + itemId + ']');
    $('#comment-form-'+itemId).modal('show');
    form.find("#Comment_VoteManual_Value[value="+vote+"]").prop("checked", true)

}