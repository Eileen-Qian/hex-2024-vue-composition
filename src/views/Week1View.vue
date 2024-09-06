<script setup>
import { ref } from 'vue'
const products = ref([
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
    stock: 20,
    isEdit: false
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '香濃奶茶搭配QQ珍珠',
    price: 45,
    stock: 18,
    isEdit: false
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
    stock: 34,
    isEdit: false
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
    stock: 10,
    isEdit: false
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    stock: 25,
    isEdit: false
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
    stock: 20,
    isEdit: false
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
    stock: 18,
    isEdit: false
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
    stock: 20,
    isEdit: false
  }
])

const changeStockNum = (item, adjustment) => {
  if (adjustment == 'plus') {
    item.stock++
  } else if (adjustment == 'minus') {
    item.stock--
  }
}

const startEditing = (item) => {
  item.isEdit = true
  item.newName = item.name
}

const confirmEdit = (item) => {
  item.isEdit = false
  item.name = item.newName
}

const handleKeyup = (event, item) => {
  if (event.key == 'Enter') {
    confirmEdit(item)
  }
}
</script>

<template>
  <main>
    <h1>2024 Vue 前端新手營 Compositon API -Week1</h1>
    <table>
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
        </tr>
      </thead>
      <tbody v-for="item in products" :key="item.id">
        <tr>
          <td>
            <template v-if="item.isEdit">
              <input
                v-model="item.newName"
                @keyup="(event) => handleKeyup(event, item)"
                class="editable-name"
                autofocus
              />
            </template>
            <template v-else>
              <span @click="startEditing(item)">{{ item.name }}</span>
            </template>
          </td>
          <td>
            <small>{{ item.description }}</small>
          </td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="changeStockNum(item, 'minus')">-</button>
            {{ item.stock }}
            <button @click="changeStockNum(item, 'plus')">+</button>
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <p class="text-center">對品項連點兩下，可以編輯品項名稱</p>
  </main>
</template>

<style scoped>
h1,
p {
  text-align: center;
}

table {
  margin: 0 auto;
}
</style>
