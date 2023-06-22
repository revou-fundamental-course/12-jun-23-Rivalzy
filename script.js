const calculateTemp = () => { // arrow function untuk mengesekusi temp yang sudah dimasukkan
  const tempSelected = document.getElementById("temp_diff");
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  // Celsius to Fahrenheit
  const celToFah = (cel) => {
    let fahrenheit = ((cel * 9) / 5 + 32).toFixed(1); // to.Fixed digunakan untuk memberikan 1 angka dibelakang desimal
    return fahrenheit;
  };

  // Fahrenheit to Celsius
  const fahToCel = (fah) => {
    let celsius = (((fah - 32) * 5) / 9).toFixed(1);
    return celsius;
  };

  if (valueTemp == "cel") {
    const celsiusInput = document.getElementById("celsiusInput");
    const inputTemp = celsiusInput.value;

    document.getElementById("fahrenheitInput").value = celToFah(inputTemp);

    // caraKalkuasi menampilkan pada laman interface
    const caraKalkulasi = document.getElementById("cara");
    caraKalkulasi.innerHTML = `(${inputTemp}&#176;C x 9/5 ) + 32 = ${celToFah(
      inputTemp
    )}&#176;F`;
  } else {
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const inputTemp = fahrenheitInput.value;

    document.getElementById("celsiusInput").value = fahToCel(inputTemp);

    const caraKalkulasi = document.getElementById("cara");
    caraKalkulasi.innerHTML = `(${inputTemp}&#176;F - 32) x 5 ) / 9 = ${fahToCel(
      inputTemp
    )}&#176;C`;
  }
};

// Menambahkan fungsi resetForm() untuk menangani klik pada tombol reset
function resetForm() {
  console.log("Berhasil dihapus")
  // Mengatur nilai input menjadi 0
  document.getElementById("celsiusInput").value = "";
  document.getElementById("fahrenheitInput").value = "";
  // Menghapus kalkulasi yang ditampilkan
  document.getElementById("cara").innerHTML = "";
}

