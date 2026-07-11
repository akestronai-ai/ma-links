import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'src', 'assets', 'images');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = {
  'logo.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzHL2n3kRaDvUfLcLzf1uLsqGFRcRwUZ7oJeSlVzr_S87b9F7rC7-eieGh0txtFNdUkxvl3ZiHqwXBPWRIG0fdlFhFkxgLrucdAkPhIvaJECKE0gof9wu3ULSo6SRLprK7TXBbDEp_D7Wkag5xIZh96JciC_eHJwfMQZvYLrgG0-YZrTEFm7nCeLqmpOb6f7SG4blP5mV2YV_3dN5TZpAQ9FwMG3xsy26x1RAdZD5D9iquo_TJT20IvkN6AaM8PDPWlMAu71Wx--s',
  'mango_skin.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxkvR8aa0lgRq8rH3eaSRHxosRALWTuET04RQ85eb22RobHyw8QZ2dcghub-MY6t1ZF3PZMsQ_uF8WQ4hHI5Lg9hVhyAcT1zbbOs0_kAE9Z4vvnmYE3Pt3-3uOoZp7BUbgkY-zEckWi0ESOWNraZYirwxuNIU9x7q9n73dxCp8jJed--8JGZP107Jm0ClIzH35j0tpA9piVw8SEmfTwfGWnLmW-IqEAHC2ra9ggvTVJEJkJ06bHj4tEbQs9iv9xNTCOVimJqHyeeA',
  'hero_crate.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuALkQZ086XyUSDjrImJbsgY8jPUKKk8zf1Z0lOORxB71kB0o2xw_0mGD_p7SzITeTeHLmI7HiWSWP9JIW1s1p50Jrf-DI7Zli1skpKK1SX2epNjNVdeG3HhcGM86BLNKm1pzQnosqNkgxeUCScbvCkPF3hm5afrDWLYTWbav1YFZju0LaTRUGnQhmaL-xHPUDVeUJfurjXd_1uJrTY3uXXLcGWZwKp6q2WRfH_oSy2ZwAqCxPmKsR1mMn9r6HQ4iyVYjzrFasV7uzs',
  'chaunsa.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuABDTJw9iq5l44TC1I9E6tuJNpekR6RoPWUp-SOTxdGBS6WWwHz-cfUTRAR20gwnKedA0RafcQXoE4K7AhFE0GNrDq9AaAdzaPqGM8MEslAN-UNf7v-szRLG9lUl1tzpDQtktX_RJTnGgDApGI7xrPk8sFM5QMOFvseOp0b5AtN2H7eTMrrF4VjzIFvirLOe3ZZpVx2aKU04u7JpdKK5yfK5STUPY32LCg26K6WPFnTgNbpbWnbg2OWbpvytf4C_KvuRYeutMtdz-8',
  'sindhri.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy15ebNKLB9MwfGafyBC5ANjW99YgGwTmo-k7vHkv3jXxhRGt6BIuOYXBJ9h7E2XoT0hiyaliJFCeOaJKFmCUjA7l3I64mUAuO-McONbv3koH3ll13wcDb9_EVOPEsWDdX7SaG99dB_mXvOmw0V3GVp7bZgJB-tWprEipbakbUDMmGuycYWrOH3glGNEqffoFzZhOWDe5Y2eRJ2eMnUj1DJBFVD-7PiMm3y4D0Ucbr_JPtXO4Swh2RZIgHy0zXzifEUzhloDltz9w',
  'anwar_ratol.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuADAkfAdBcRDAVeeeY0ML82JLwss--f8uUEC21uRq3TgWWWeMrBS3U8hz-UvzHushcd1hh_7eUT1Uqdah2NlY_bQU1AfLVwhdIsSV4btqhjisu9uf6PqosisxmA-6T1qoYUs7k_oelIpvHZBssZ9lyPi65FMId8bWRdzpDXK6bzpYpbNygEDYXha6J1CHrg-7Awzaqeen_sGhyrIYG5JvQp2kwAz7mpm5epZg55-xOsjoATPD4lf7P3KrpAKUZTnfPL8aGG5hU-9tU',
  'langra.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0HZwEKQHS8DNLU3AsyonC5MuCUCegp_aXfix3E2vI6eCuxLko8yAWe_qAjl6QJ_-aF8-uafHwY5N_UJ99tSIWHNh8IvdpGqzpV7CtN3OIjiElANIPfd-0D5ayIJ-30d9Nq9L0uZuliRMz6HWaU41mTBMbdqg3rw0ksjkE8utb8sFtrOxSE-aCpVcgf9-bHthwet4jdi-LFWqRhSPDdWTmEaLD0-U5i_AeZ9I_dCPKcDuY6N1boeJEcQla0ce4jezQPJrKaYuL1fY',
  'dusehri.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwIob_Dz5lz88vvtkB9afKwW2KJv4WY0hTTC4DvLpHgwYINPhXmkHAPfPGZC83xZDdQs0_29In28fecddUeSQPuY8N9o5_Djo6JwAWIkKhNSdB-i8y58cCnlOb2tBTWwgpKNx4UaC7JjjXefUIFzP5kvqX-r7EuLzuT6I7y4Kb_s7doDbjhu5Zckxg6-Zl4B_4nsaev-Ew_sPm81Og63ESliFLyzcFnDeFK8_VX7hhN6dD9HUGET2prDcaho78QuRa4ltMoaxecJ0',
  'saroli.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkLNrknzlMda-wsFd-wDxyuFQgomG9p-QD54x2UwydK7dA6W5IPac_qBOmPxXj4oViyEMFigGeDjE9cqyABjDLuoR5kLqddOifXAl6VwLA8PZVBCQKHLF2_Ipn4lb1JcyCMu8iz3HWJGxvwrVVXai1Lcrq34Tvh-q251BQTHCl9ogbTApapCsSV8tfJQ7mqiVbKQkFzSPJ-eAgIKKPIp3aZBmmu3nXll5MxUhiyvL1xDBmfD46pMukT_sCafblWr720VFLE7qSieA',
  'orchard_export.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHbTF-bWMo9mXIB_tB2jlD-pvef4hQG9dmJTzNWe0OPkGN3pXgKeR55TwUoc5Gff9qTfOAFEE_bMY5ve-xlUgnVZ5MZ2xKaB2P5IrEdJJIBom47aEmZkPxtiM301hJuS2w96UOygANn73kMlPPMpZp_wFfQDOUCzT7Kgs88Wmh_nmfbTl903AoY7vus-woIckx6KcgR5W3ysHnzNYYuV8HvVNH1ZwM7iOFG9E4FaY2dzx_FiKsIubi3kMO_owwiwmbg9pIqF8Db-U',
  'quality_assurance.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHONPoPB1rrp3X_etUlK7WXIb8PTyH7oKdxlso9lUDt_v0J1hPQemnFWKoVRrZSwFulUUsm19uObtUapGo1Svf2guSGWWAeE7kikFzyqvAtsEK2723gKKjVxz_B1KN9B1l3JF-gNmJmFi9O6EQC8Qvf_-Ifj6iU9TqeDltXwCwt1KVxSnOtHQqZFhhNN44COkmD3TC5SIrJDUmo3X5h6ampUNW5SaTsKe7YvpJDNhHgtsbNWrU3JO9oDvTUNDkHFbiVH6wNbM5vkQ',
  'perfect_ripeness.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFzeaZexstBlZ2ZlRK5KSR6rWCkM7nly6C7daKIoQ76_HrklLaN4tQCgzL0XR3-XI42VtE8nF8VmCVVVwaQbZcPTGhRZhUhVUcM0GGWoBgF7NoX5BMZTlPSKVb3IE9gqGHVxYFUPI2n92ue9LXO0ZxmQjVs1ZhPVn1zVawjicleVsg4Uh72ELVbvMk1noBmy0ZJ365Q0fzOcj_0UIb6oJEtEJmZFOblItg4W27AI-9g30tkxl24rUSh8NlCIYUIP9QRdAcKthw6II',
  'global_reach.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEgifo-_iCodM77oixnXipxNiwOMF-TO-dpHjHRQ3JUSQaoFWyHZYvn4GJjtNMO7htOffZfEALcAQ6VbdvhZxPeBa15KxWnGyNtsqNnvEJWDrLWfXhS73kwj8FfGSqy9XUSfHiYb529luj7-a70W2urjo_8ke0reTti4-SSBPYKqrhOtaqs2K1UjciPVxxgcPLGnK_43GelKUaOrvn6HzeQ-hQookdS_DCtKSpH7ILbUbd9UIZnHShyQfp5p67AncmyLTV_RIMMK8',
  'footer_accent.png': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF1IWYkLuzo2MasgbhjbudWd8YmBHChOPNC9SajhdLoRKJJKOXxumll7uhwf5LpMv2nHnUJsK39Kb3ORydvp0JZ8os4KOGQcwMOEUkjXMkYKihVswRVRspaw8vOuQtIIixsef5L3_G-5sn4PGXOiUGQS-EnEwkXAGb3oiH-TUyHNG9XvIOhd8Wn3N5bBI1PFPuEW_oCgHWYN_3mLfj_-YtUV-nbBkDiQ2P8Fj_sj9x-2d3bdJBHhL0F9lO6UBexZla-egCzmHD560'
};

const download = (filename, url) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(targetDir, filename));
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: HTTP ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(targetDir, filename), () => {});
      reject(err);
    });
  });
};

const main = async () => {
  console.log('Downloading assets to:', targetDir);
  for (const [filename, url] of Object.entries(images)) {
    try {
      await download(filename, url);
    } catch (error) {
      console.error(error.message);
    }
  }
  console.log('Download process finished.');
};

main();
