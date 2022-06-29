using ApartmentManagementSystem.Entity.Base;
using System.Collections.Generic;

#nullable disable

namespace ApartmentManagementSystem.Entity.Models
{
    public class BillType : EntityBase
    {
        public BillType()
        {
            Bills = new HashSet<Bill>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Bill> Bills { get; set; }
    }
}
