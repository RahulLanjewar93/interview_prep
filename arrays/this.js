console.info(`this from main ${this}`)

(function () {
    console.log(`this from reg func ${this}`)
}())

(() => {
    console.log(`this from arrow func ${this}`);
})()