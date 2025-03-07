function skillsMember() {}

skillsMember.prototype = {
    constructor: skillsMember,
    addSkill: function(skillName) {
        this.skills.push(skillName);
    },
    removeSkill: function(skillName) {
        this.skills.splice(this.skills.indexOf(skillName), 1);
    },
    showSkills: function() {
        console.log(this.skills);
    }
};