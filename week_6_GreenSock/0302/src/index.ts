import gsap from "gsap";
import { Howl } from "howler";

const scoreDom = document.querySelector(".score");
const sound = new Howl({ src: [`../music/sound_combo1.mp3`] });

function count(num: number): void {
  if (!scoreDom) return;

  const counter = { score: 0 };
  gsap.to(counter, {
    duration: 1,
    score: num,
    ease: "none",
    onStart() {
      for (let i = 0; i < num; i++) {
        setTimeout(() => sound.play(), (i / num) * 1000);
        console.log((i / num) * 1000);
      }
    },
    onUpdate() {
      scoreDom.innerHTML = counter.score.toFixed(0);
      console.log(counter.score.toFixed(0));
    },
    onComplete() {
      console.log("onComplete");
      sound.play();
    },
  });
}
document.querySelector("#play")?.addEventListener("click", () => {
  count(8);
});
