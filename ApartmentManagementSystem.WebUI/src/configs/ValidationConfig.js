export const customRules = {
  gsm: [
    () => ({
      validator(_, value) {
        return validateLength({
          value,
          length: 11,
          emptyMesssage: "Telefon numarası giriniz!",
          message: "Geçerli bir telefon giriniz!",
        });
      },
    }),
  ],

  gln: [
    () => ({
      validator(_, value) {
        return validateLength({
          value,
          length: 13,
          emptyMesssage: "GLN numarası giriniz!",
          message: "Geçerli bir Gln giriniz!",
        });
      },
    }),
  ],
  tckn: [
    () => ({
      validator(_, value) {
        return validateLength({
          value,
          length: 11,
          emptyMesssage: "Tc Kimlik numarası giriniz!",
          message: "Geçerli bir Tc Kimlik giriniz!",
        });
      },
    }),
  ],
  taxNo: [
    () => ({
      validator(_, value) {
        return validateLength({
          value,
          length: 10,
          emptyMesssage: "Vergi Kimlik numarası giriniz!",
          message: "Geçerli bir Vergi Kimlik giriniz!",
        });
      },
    }),
  ],
  cityDistrict: [
    () => ({
      validator(_, value) {
        if (value === undefined)
          return Promise.reject(new Error("Şehir seçiniz!"));

        if (value.length === 0)
          return Promise.reject(new Error("Şehir seçiniz!"));

        if (value.length === 1) {
          return Promise.reject(new Error("İlçe seçiniz!"));
        }

        return Promise.resolve();
      },
    }),
  ],
  iban: [
    () => ({
      validator(_, value) {
        return validateLength({
          value,
          length: 26,
          emptyMesssage: "Iban numarası giriniz!",
          message: "Geçerli Iban numarası giriniz!",
        });
      },
    }),
  ],
  ibanCode: [
    () => ({
      validator(_, value) {
        return validateLength({
          value,
          length: 5,
          emptyMesssage: "Iban numarası giriniz!",
          message: "Geçerli Iban Kodu Giriniz!",
        });
      },
    }),
  ],
  storeName: [
    () => ({
      validator(_, value) {
        if (value === undefined)
          return Promise.reject(new Error("Mağaza adı giriniz!"));

        var regex = /^[a-zA-Z0-9]+$/;
        var isValid = value.match(regex);
        if (isValid == null) {
          return Promise.reject(
            new Error("Mağaza adını kurallara uygun giriniz!")
          );
        }

        if (value.length <= 5)
          return Promise.reject(new Error("En az 5 karakter olmalıdır!"));

        return Promise.resolve();
      },
    }),
  ],

  priceCompare: [
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (value === "")
          return Promise.reject(new Error("Satış Fiyatı giriniz!"));

        if (value <= getFieldValue("listPrice")) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error("Satış Fiyatı, Liste fiyatından büyük olamaz!")
        );
      },
    }),
  ],
};

const validateLength = (props) => {
  //value değeri boş ise emptyMessage döndürüyoruz.
  if (props.value === undefined)
    return Promise.reject(new Error(props.emptyMesssage));

  //length kontrolü sağlıyoruz.
  let length = props.value.replaceAll(" ", "").replaceAll("_", "").length;
  if (length === props.length) {
    return Promise.resolve();
  }

  // length kontrolünden geçemediyse message döndürüyoruz.
  return Promise.reject(new Error(props.message));
};

export const mask = {
  taxNo: "1111111111",
  tckn: "11111111111",
  gln: "1111111111111",
  phone: "0511 111 11 11",
};

export const formatPhone = (phone) => {
  var regex = /^([^\s]{4})([^\s]{3})([^\s]{2})([^\s]{2})$/g;
  var match = regex.exec(phone);
  if (match) {
    match.shift();
    phone = match.join(" ");
  }
  return phone;
};
