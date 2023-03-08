import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ItemService } from 'src/item.service';

export class listitems {
  [x: string]: any;
  id!: string;
  productName!: string;
  category!: string;
  Productquantity!: string;
  Productprice!: string;
}
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'productName', 'category', 'Productquantity', 'Productprice', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  productlist: any;
  dataSource: any;
  NAMES!: any
  products = {}

  constructor(private service: ItemService) { }

  ngOnInit(): void {
    this.getallproduct()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getallproduct() {
    this.service.getproductlist().subscribe(res => {
      console.log(res);
      this.productlist = res;
      this.dataSource = new MatTableDataSource(this.productlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  deleteproduct(id: any) {
    this.service.rejectitem(id).subscribe((res) => {
      this.products = res
      this.getallproduct()
    })
  }

}
