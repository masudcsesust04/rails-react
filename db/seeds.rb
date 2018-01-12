Diamond.create!([
   { shape: 'RD', weight: 0.90, color: 'F', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 100, polish: 'VG' },
   { shape: 'RD', weight: 0.80, color: 'R', clarity: 'VS2', length: 5.06, width: 6.06, lab: 'GIA', price: 80, polish: 'VG' },
   { shape: 'RD', weight: 0.70, color: 'G', clarity: 'VS3', length: 6.06, width: 6.06, lab: 'GIA', price: 90, polish: 'VG' },
   { shape: 'RD', weight: 0.60, color: 'B', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 300, polish: 'VG' },
   { shape: 'AS', weight: 0.90, color: 'F', clarity: 'VS2', length: 6.06, width: 6.06, lab: 'GIA', price: 90, polish: 'VG' },
   { shape: 'AS', weight: 0.80, color: 'G', clarity: 'VS3', length: 6.06, width: 6.06, lab: 'GIA', price: 50, polish: 'VG' },
   { shape: 'AS', weight: 0.70, color: 'B', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 500, polish: 'VG' },
   { shape: 'PR', weight: 0.90, color: 'F', clarity: 'VS2', length: 6.06, width: 6.06, lab: 'GIA', price: 40, polish: 'VG' },
   { shape: 'PR', weight: 0.80, color: 'R', clarity: 'VS3', length: 6.06, width: 6.06, lab: 'GIA', price: 95, polish: 'VG' },
   { shape: 'PR', weight: 0.70, color: 'G', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 90, polish: 'VG' },
   { shape: 'CU', weight: 0.90, color: 'R', clarity: 'VS2', length: 6.06, width: 6.06, lab: 'GIA', price: 45, polish: 'VG' },
   { shape: 'CU', weight: 0.80, color: 'G', clarity: 'VS3', length: 6.06, width: 6.06, lab: 'GIA', price: 70, polish: 'VG' },
   { shape: 'CU', weight: 0.70, color: 'B', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 75, polish: 'VG' },
   { shape: 'OV', weight: 0.90, color: 'F', clarity: 'VS2', length: 6.06, width: 6.06, lab: 'GIA', price: 80, polish: 'VG' },
   { shape: 'OV', weight: 0.80, color: 'R', clarity: 'VS3', length: 6.06, width: 6.06, lab: 'GIA', price: 85, polish: 'VG' },
   { shape: 'OV', weight: 0.70, color: 'G', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 200, polish: 'VG' },
   { shape: 'ER', weight: 0.90, color: 'F', clarity: 'VS1', length: 6.06, width: 6.06, lab: 'GIA', price: 500, polish: 'VG' }
])

puts "Created #{Diamond.count} diamonds!"
