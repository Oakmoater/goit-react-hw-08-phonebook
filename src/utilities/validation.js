export function validateName(name) {
  const namePattern = new RegExp(
    "^[a-zA-Zа-яА-ЯіІєЄїЇ ']+(([&#39; -][a-zA-Zа-яА-ЯіІєЄїЇ '])?[a-zA-Zа-яА-ЯіІєЄїЇ']*)*$"
  );
  return namePattern.test(name);
}

export function validateNumber(number) {
  const numberPattern = new RegExp(
    '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}'
  );

  return numberPattern.test(number);
}
