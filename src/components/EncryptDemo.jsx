import { useState } from 'react';

function EncryptDemo() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [encryptedResult, setEncryptedResult] = useState('');
  const [decryptedResult, setDecryptedResult] = useState('');

  const encrypt = (num) => {
    // Simulación simple: agregar un offset (no es cifrado real pero representa la idea)
    const offset = 1000;
    return num + offset;
  };

  const decrypt = (encryptedNum) => {
    const offset = 1000;
    return encryptedNum - offset;
  };

  const handleEncryptAndOperate = () => {
    const num1 = parseInt(input1);
    const num2 = parseInt(input2);

    const encrypted1 = encrypt(num1);
    const encrypted2 = encrypt(num2);

    // Sumar directamente los números cifrados (simulación de operación homomórfica)
    const encryptedSum = encrypted1 + encrypted2;

    const decryptedSum = decrypt(encryptedSum);

    setEncryptedResult(encryptedSum);
    setDecryptedResult(decryptedSum);
  };

  return (
    <div className="demo-container">
      <h2>Demo de Cifrado Homomórfico</h2>
      <p>Ingresa dos números, los ciframos, sumamos encriptado y desciframos el resultado.</p>

      <div className="input-group">
        <input
          type="number"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Primer número"
        />
        <input
          type="number"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Segundo número"
        />
      </div>

      <button onClick={handleEncryptAndOperate}>Cifrar, Operar y Descifrar</button>

      {encryptedResult && (
        <div className="results">
          <p><strong>Resultado Cifrado:</strong> {encryptedResult}</p>
          <p><strong>Resultado Descifrado:</strong> {decryptedResult}</p>
        </div>
      )}
    </div>
  );
}

export default EncryptDemo;
