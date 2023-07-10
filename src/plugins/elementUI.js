import Vue from 'vue'
import{
    Button, Container,Main,Footer,Aside,Header,Icon,Menu,
    Carousel,CarouselItem,MenuItem,Row,Col,Image,Popover,
    Input,Table,TableColumn,Pagination,Tag ,Dropdown,DropdownMenu,
    DropdownItem,Link,Form,FormItem,Message,Divider}  from 'element-ui'
    Vue.use(Button)
    Vue.use(Container)
    Vue.use(Main)
    Vue.use(Footer)
    Vue.use(Aside)
    Vue.use(Header)
    Vue.use(Icon)
    Vue.use(Menu)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(MenuItem)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Image)
    Vue.use(Popover )
    Vue.use(Input)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Pagination)
    Vue.use(Tag)
    Vue.use(Dropdown)
    Vue.use(DropdownItem)
    Vue.use(DropdownMenu)
    Vue.use(Link)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Divider)
    Vue.prototype.$message = function(type, msg) {
        Message({
          showClose: true, // 关闭按钮是否显示
          message: msg, // 提示信息
          type: type // 状态
        })
      }