// app/utils.ts
import sorular from "./veri";

export function sorulariGetir(): Promise<typeof sorular> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sorular);
    }, 1000); // Simüle edilmiş gecikme (isteğe bağlı)
  });
}
