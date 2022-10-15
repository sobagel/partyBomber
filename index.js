import sleep from '../sleep'

let toggle = false
let target = ''
const partiesPerSecond = 2 // parties per second

register("step", () => {
    if (!toggle) return
    if (Client.currentGui.get() !== null) return
    sleep(50, () => {
        ChatLib.command(`p ${target}`)
        sleep(200, () => {
            ChatLib.command('p leave')
        })
    })
}).setFps(partiesPerSecond)

register("command", (arg) => {
	target = arg
    toggle = !toggle
}).setName('partybomb')

register("chat", (text) => {
    if (text === "Couldn't find a player with that name!" || text === "You cannot invite that player since they're not online.") toggle = false
}).setChatCriteria("${text}").setContains();
