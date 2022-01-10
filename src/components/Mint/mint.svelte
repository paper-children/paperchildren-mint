<script>
  import axios from 'axios'
  import { saleV1CA, buyerList, myNFT, paperV1TotalSupply } from '@/contract'
  import {
    caver,
    isHolder,
    klaytn,
    myAddress,
    imgLink,
    paperV1TotalSupplyNum,
    spiner,
  } from '@/stores'

  import SaleV1ABI from '@/abi/SaleV1.json'

  function getImg() {
    myNFT($myAddress).then((data) => {
      $spiner = true
      let num = parseInt(data)
      axios.get(`https://api.paperchildren.net/v1/${num}`).then((data) => {
        $imgLink = data.data.image
        $spiner = false
      })
    })
  }

  function mint() {
    console.log($caver)
    const saleV1Contract = new $caver.klay.Contract(SaleV1ABI, saleV1CA)
    console.log(saleV1Contract)
    saleV1Contract.methods
      .publicSale()
      .send({ from: $klaytn.selectedAddress, gas: 900000, value: '50000000000000000000' })
      .then(() => {
        buyerList($myAddress).then((data) => {
          $isHolder = data
          console.log($isHolder)
        })
        getImg()
        paperV1TotalSupply().then((data) => {
          $paperV1TotalSupplyNum = data
        })
      })
  }
</script>

<div class="mint-btn" on:click={mint}>
  <span class="letter-a">M</span>
  <span class="letter-b">I</span>
  <span class="letter-c">N</span>
  <span class="letter-d">T</span>
  <span class="letter-e">N</span>
  <span class="letter-f">O</span>
  <span class="letter-g">W</span>
  <span class="letter-h">!</span>
</div>

<style lang="scss">
  .mint-btn {
    font-size: 2.5rem;
    font-family: 'Colored Crayons';
    margin-bottom: 30px;
    cursor: pointer;
    span {
      letter-spacing: 0px;
    }
    .letter-a {
      color: red;
    }
    .letter-b {
      color: khaki;
    }
    .letter-c {
      color: blue;
    }
    .letter-d {
      color: purple;
    }
    .letter-e {
      color: salmon;
    }
    .letter-f {
      color: darkorange;
    }
    .letter-g {
      color: darkmagenta;
    }
    .letter-h {
      color: sienna;
      font-family: 'DK Cool Crayon Font';
    }
  }

  @media screen and (max-width: 768px) {
  }
</style>
