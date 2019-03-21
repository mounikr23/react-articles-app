export default function () {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)).toLocaleString('en-IN', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}