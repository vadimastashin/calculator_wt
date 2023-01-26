function primer() {
    form_1.t1.value = 1
    form_1.t2.value = 12
}

function primer1() {
    form_2.t5.value = 1
    form_2.t6.value = 12
}

function raschet() {
    with (Math) {
        i1 = form_1.t1.value.replace(',', '.')
        u1 = form_1.t2.value.replace(',', '.')

        p1 = i1 * u1

        form_1.t4.value = p1
    }
}

function raschet1() {
    with (Math) {
        p2 = form_2.t5.value.replace(',', '.')
        u2 = form_2.t6.value.replace(',', '.')

        i2 = p2 / u2

        form_2.t8.value = i2
    }
}