import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, CreditCard, Copy, Check, PackageCheck, HeartHandshake } from 'lucide-react';
import { WeddingData, BankAccount } from '../types';

interface DigitalGiftSectionProps {
  data: WeddingData;
}

export const DigitalGiftSection: React.FC<DigitalGiftSectionProps> = ({ data }) => {
  const { digitalGift } = data;
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);

  if (!digitalGift.enabled) return null;

  const handleCopyAccount = (account: BankAccount) => {
    navigator.clipboard.writeText(account.accountNumber);
    setCopiedId(account.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleCopyAddress = () => {
    if (digitalGift.shippingAddress) {
      navigator.clipboard.writeText(
        `${digitalGift.shippingAddress.recipient}\n${digitalGift.shippingAddress.phone}\n${digitalGift.shippingAddress.fullAddress}`
      );
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2500);
    }
  };

  return (
    <section id="amplop" className="relative py-16 sm:py-24 px-6 sm:px-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-[#A3927D] font-medium"
        >
          Tanda Kasih
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-serif-elegant text-[#1F1B18] mt-2"
        >
          {digitalGift.title}
        </motion.h2>
        <div className="w-16 h-[1px] bg-[#D4C5B2] mx-auto mt-4" />
        <p className="text-xs sm:text-sm text-[#6B6154] font-light max-w-lg mx-auto mt-4 leading-relaxed">
          {digitalGift.description}
        </p>
      </div>

      {/* Bank Account Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {digitalGift.accounts.map((acc, index) => (
          <motion.div
            key={acc.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/90 rounded-2xl p-6 border border-[#E6DCCE] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#B89665]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7A6E60]">
                    {acc.bankName}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#A39789] bg-[#FAF5EC] px-2 py-0.5 rounded">
                  ATM / Transfer
                </span>
              </div>

              <div className="my-4">
                <p className="text-xs text-[#9E9080] mb-0.5">Nomor Rekening</p>
                <p className="text-xl sm:text-2xl font-mono font-bold text-[#231F1C] tracking-wider select-all">
                  {acc.accountNumber}
                </p>
                <p className="text-xs text-[#52493E] font-medium mt-1">
                  a.n. {acc.accountHolder}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleCopyAccount(acc)}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#FAF7F2] text-[#3D362E] hover:bg-[#2C2724] hover:text-[#FAF7F2] border border-[#E5DACD] text-xs font-medium transition-all"
            >
              {copiedId === acc.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-700 font-semibold">Nomor Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#A3927D]" />
                  <span>Salin Nomor Rekening</span>
                </>
              )}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Physical Gift Accordion */}
      {digitalGift.shippingAddress && (
        <div className="text-center">
          <button
            onClick={() => setIsAddressOpen(!isAddressOpen)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF5EC] border border-[#E0D3C1] text-xs font-medium text-[#6B5F50] hover:bg-[#F2ECE0] transition-colors shadow-sm"
          >
            <Gift className="w-4 h-4 text-[#B89665]" />
            <span>{isAddressOpen ? 'Tutup Alamat Pengiriman Kado' : 'Kirim Kado Fisik (Alamat)'}</span>
          </button>

          <AnimatePresence>
            {isAddressOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-6 rounded-2xl bg-white/95 border border-[#E5DACD] shadow-sm max-w-md mx-auto text-left text-xs sm:text-sm text-[#52493E] space-y-2">
                  <div className="flex items-center gap-2 text-[#96836E] font-medium text-xs uppercase tracking-wider mb-2">
                    <PackageCheck className="w-4 h-4 text-[#B89665]" />
                    <span>Alamat Penerima Kado</span>
                  </div>
                  <p className="font-semibold text-[#231F1C]">
                    {digitalGift.shippingAddress.recipient}
                  </p>
                  <p className="text-[#6E6356]">{digitalGift.shippingAddress.phone}</p>
                  <p className="text-[#6E6356] leading-relaxed">
                    {digitalGift.shippingAddress.fullAddress}
                  </p>

                  <div className="pt-3">
                    <button
                      onClick={handleCopyAddress}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-[#FAF7F2] text-[#3D362E] hover:bg-[#2C2724] hover:text-[#FAF7F2] border border-[#E2D5C3] text-xs font-medium transition-all"
                    >
                      {addressCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Alamat Berhasil Disalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#9E8B75]" />
                          <span>Salin Alamat Lengkap</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};
