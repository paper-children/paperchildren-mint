<script>
  import axios from 'axios'
  import {
    isConnect,
    myAddress,
    myAddressShort,
    klaytn,
    caver,
    paperV1TotalSupplyNum,
    isHolder,
    imgLink,
    spiner,
  } from '@/stores'
  import { paperV1TotalSupply, buyerList } from '@/contract'
  import { onMount } from 'svelte'
  import { myNFT } from '@/contract'

  onMount(() => {
    paperV1TotalSupply().then((data) => {
      $paperV1TotalSupplyNum = data
    })
  })

  if (window.klaytn) {
    window.klaytn.on('accountsChanged', function () {
      connect()
    })
  }

  function getImg() {
    myNFT($myAddress).then((data) => {
      $spiner = true
      let num = parseInt(data)
      axios.get(`https://api.https://paperchildren.net/v1/${num}`).then((data) => {
        $imgLink = data.data.image
        $spiner = false
      })
    })
  }

  function connect() {
    if (window.klaytn === undefined) {
      alert("There's no Kaikas. Please install Kaikas wallet.")
      return
    }
    $klaytn = window.klaytn
    $caver = window.caver
    $klaytn.enable().then(() => {
      $isConnect = true
      $myAddress = $klaytn.selectedAddress
      $myAddressShort = `${$myAddress.slice(0, 6)}...${$myAddress.slice(-4)}`
      buyerList($myAddress)
        .then((data) => {
          $isHolder = data
        })
        .then(() => {
          if ($isHolder === true) {
            getImg()
          } else {
            $imgLink = '/assets/random.png'
          }
        })
    })
  }
</script>

<div class="wallet-btn" on:click={connect}>Wallet Connect</div>

<style lang="scss">
  .wallet-btn {
    font-size: 2.5rem;
    font-family: 'Colored Crayons';
    cursor: pointer;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    .wallet-btn {
      font-size: 1.5rem;
      font-family: 'Colored Crayons';
      cursor: pointer;
      margin-bottom: 30px;
    }
  }
</style>
