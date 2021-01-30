const skillStack = [];
let answer = 0;

function evaluation(skillTree) {
    const comparableStack = [];
    for(let i=0; i<skillTree.length; i++) {
        const skill = skillTree[i];
        if (skillStack.find((element) => element === skill) === undefined) {
            continue;
        }
        comparableStack.push(skill);
    }
    
    for(let i=0; i<comparableStack.length; i++) {
        if(comparableStack[i] !== skillStack[i]) {
            return;
        }
    }
    answer++;
}

function solution(skill, skill_trees) {

    for (let i=0; i<skill.length; i++) {
        skillStack.push(skill[i]);
    }
    
    for (let i=0; i<skill_trees.length; i++) {
        evaluation(skill_trees[i]);
    }
    
    return answer;
}