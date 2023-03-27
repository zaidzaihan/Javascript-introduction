let data1 = 1
let data2 = "1"
console.log(data1, typeof data1)
console.log(data2,typeof data2)
let data3 = data1 + data2
console.log (data3, typeof data3)
let data4 = data1 + parseInt(data2)
console.log(data4, typeof data4)
data4= 21
let data5 = "Zaid "
let data6= data5 + data4.toString()
console.log(data6)

//array
let data = ["one", 2, true]
console.log(data[2], typeof data[2])

//object
let user = {
    name: "Zaid",
    faculty: "fkekk",
    phone: ["01124044350","01124044444"],//array in object
    email: {personal: "zaidzaihan1611@gmail.com", office:"b022110151@student.utem.edu.my"}
}
console.log("Second phone:",user.phone[1])
console.log("Office:", user.email.office)
