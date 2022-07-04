using ApartmentManagementSystem.Entity.Base;
using System;
 

namespace ApartmentManagementSystem.Entity.Models
{
    public class Bill : EntityBase
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BillTypeId { get; set; }
        public string Card { get; set; }
        public int Value { get; set; }
        public int? PaidValue { get; set; }
        public DateTime? PaidDate { get; set; }
        public DateTime Date { get; set; }

        public virtual BillType BillType { get; set; }
        public virtual User User { get; set; }
    }
}
