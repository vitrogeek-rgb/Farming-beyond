const $html = document.querySelector('html')
const $checkboxes = document.querySelectorAll('.theme-switch')




$checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            $checkboxes.forEach(cb => { if (cb !== this) cb.checked = false })
        }




        $checkboxes.forEach(cb => $html.classList.remove(cb.value))




        if (this.checked) {
            $html.classList.add(this.value)
        }
    })
})