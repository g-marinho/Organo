import "./Rodape.css"

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className="links">
                <a href="facebook.com" target="_blank"><img src="/imagens/fb.png" alt="qualquer coisa" /></a>
                <a href="twitter.com" target="_blank"><img src="/imagens/tw.png" alt="qualquer coisa" /></a>
                <a href="instagram.com" target="_blank"><img src="/imagens/ig.png" alt="qualquer coisa" /></a>
            </div>
            <div>
                <img src="/imagens/logo.png" />
            </div>
            <div>
                <p>Desenvolvido por Gabriel</p>
            </div>        
        </footer>
    )
}

export default Rodape