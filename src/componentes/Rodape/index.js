import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="links">
        <a href="https://facebook.com" target="_blank">
          <img src="/imagens/fb.png" alt="qualquer coisa" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src="/imagens/tw.png" alt="qualquer coisa" />
        </a>
        <a href="https://instagram.com" target="_blank">
          <img src="/imagens/ig.png" alt="qualquer coisa" />
        </a>
      </div>
      <div class="logotipo">
        <img src="/imagens/Logotipo.png" />
      </div>
      <div>
        <p>Desenvolvido por Gabriel</p>
      </div>
    </footer>
  );
};

export default Rodape;
