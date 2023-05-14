<template>
  <div class="footer_wrapper">
    <footer>
      <ul>
        <li>
          <a class="contact" href="/">お問合せ</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer_wrapper {
  height: 200px;
  background-color: #f1f1f1;
  footer {
    display: block;
    max-width: 1280px;
    margin: 0 auto;
    height: 100%;
    ul {
      display: block;
      padding-top: 50px;
      li {
        list-style: circle;
        a{
          &:hover{
            border-bottom: 1px solid #000;
          }
        }
      }
    }

    .contact {
      color: black;
    }
  }
}
</style>
