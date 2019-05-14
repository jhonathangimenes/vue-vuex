<template>
    <div>
        <h3 class="font-weight-light">Contador {{ $store.state.contador }}</h3>
        <button class="btn btn-danger" @click="$store.state.contador--">-</button>
        <button class="btn btn-success" @click="$store.state.contador++">+</button>
    </div>
</template>