import './notification.css'
function Notification({ connection } : { connection: boolean }) {
    return (
        <section className={connection ? "notification-bar green" : "notification-bar red"}>
            <p>{connection ? 'Conexión establecida' : 'No hay conexión.'}</p>
        </section>
    )
}
export { Notification }