function skillsMember(){
  var member = document.getElementById("member");
  var skillsMember = document.getElementById("skillsMember");
  var projectsMember = document.getElementById("projectsMember");
  var contactMember = document.getElementById("contactMember");
  var memberContent = document.getElementById("memberContent");
  var skillsMemberContent = document.getElementById("skillsMemberContent");
  var projectsMemberContent = document.getElementById("projectsMemberContent");
  var contactMemberContent = document.getElementById("contactMemberContent");

  member.style.color = "#ffffff";
  skillsMember.style.color = "#f7f7f7";
  projectsMember.style.color = "#ffffff";
  contactMember.style.color = "#ffffff";

  memberContent.style.display = "none";
  skillsMemberContent.style.display = "block";
  projectsMemberContent.style.display = "none";
  contactMemberContent.style.display = "none";
}