// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      steps: [
        {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.', counterClick: 1},
        {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.', counterClick: 0},
        {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.', counterClick: 0},
        {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.', counterClick: 0},
        {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.', counterClick: 0},
      ],
      showButton: true,
    }
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      this.activeIndex--;
    },
    reset() {
      // начать заново
      this.activeIndex = 0;
      this.steps[0].counterClick = 1
      for(let i = 0; i < this.steps.length; i++) {
        if( i !== 0) {
          this.steps[i].counterClick = 0
        }
      }
      this.showButton = true;
    },
    nextOfFinish() {
      // кнопка вперед или закончить
      if (this.changeNameButtonNext === 'вперед') {
        this.activeIndex++;
        for(let i = 0; i < this.steps.length; i++) {
          if (this.activeIndex === i) {
          this.steps[i].counterClick++;
          }
        }
      } else if (this.changeNameButtonNext === 'закончить') {
        this.showButton = false;
      }
      
    },
    setActive(ind) {
      // когда нажимаем на определенный шаг
      this.activeIndex = ind;
      for(let i = 0; i < this.steps.length; i++) {
        if (ind === i) {
          this.steps[i].counterClick++;
        }
      }
    }
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    selectedStep() {
      let step;
      for(let i = 0; i < this.steps.length; i++) {
        if(this.activeIndex === i) {
          step = this.steps[i]
        }
      }
      return step;
    },
    // 3. находимся ли мы на последнем шаге
    changeNameButtonNext() {
      let nameButton = 'вперед'
      if (this.activeIndex === 4) {
         nameButton = 'закончить'
      }
      return nameButton;
    },
    
    //4.Разблокировка кнопки Назад
    disableButtonBack() {
      let bulian = true;
      if (this.activeIndex !== 0) {
        bulian = false;
      }
      return bulian;
    }
  }
}

Vue.createApp(App).mount('#app')