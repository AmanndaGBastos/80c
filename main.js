nameListArray = ["Amanda",
"Vinicius",
"Lina",
"Luisa",
"Sofia Gomes",
"Diogo",
"Gustavo",
"José",
"Théo",
"Igor",
"Valentina"]

NameOfTheMemberArray = [];

function submit()
{
    var displaypartyMembersArray = [];

    for (var j = 1; j <= 4; j++) 
    {
        var nameOfThePartyMembers = document.getElementById("nameOfThePartyMembers"+j).value;
        console.log(nameOfThePartyMembers);
        NameOfTheMemberArray.push(nameOfThePartyMembers);
    }

    console.log(NameOfTheMemberArrayy);

    var lenghtOfNameOfMemberArray = NameOfTheMemberArray.length;
    console.log(lenghtOfNameOfMemberArray);

    for (var k = 0; k < lenghtOfNameOfMemberArray; k++) 
    {
        displaypartyMembersArray.push("<h4>NAME - "+ NameOfTheMemberArray[k] + "</h4>");
        console.log(displaypartyMembersArray);
    }

    console.log(isplaypartyMembersArray);
    document.getElementById("displayNameWithCommas").innerHTML = displaypartyMembersArray;

    var removeCommas = displaypartyMembersArray.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
    

    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";

}
var GuestName= document.getElementById("name1").value;
nameOfThePartyMembers.push(GuestName);

nameOfThePartyMembers.sort();

function searching()
{
    var s= document.getElementById("s1").value
    var found=0;
    var j;
    for(j=0; j<lenghtOfNameOfMemberArray; j++){
        if(s==nameOfThePartyMembers[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="nome não encontrado"+found+" vez(es)";
    console.log("nome encontrado"+found+"vez(es)");
}