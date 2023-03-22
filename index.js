// Write your solution here!
const cats = ['Milo','Otis','Garfield']



const destructivelyAppendCat = ['Milo','Otis','Garfield']
destructivelyAppendCat.push('Gift')

const destructivelyPrependCat = ['Milo','Otis','Garfield']
destructivelyPrependCat.unshift('Ginger')

const destructivelyRemoveLastCat = ['Milo','Otis','Garfield']
destructivelyRemoveLastCat.pop('Garfield')

const appendCat = [...cats, 'Angela']


const prependCat = ['Angela',...cats ]

const removeLastCat = cats.slice(-1)

const removeFirstCat = cats.slice(1)